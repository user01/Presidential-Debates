# -*- coding: utf-8 -*-
#!/usr/bin/env python

#


# Core Imports
import os
import re
from io import StringIO
from functools import reduce

# Data
import numpy as np
import pandas as pd

# Text
import nltk
from nltk import pos_tag
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords, wordnet
from sklearn.feature_extraction.text import TfidfVectorizer

# Local Utilities
from texttools.replacements import expand_all, remove_punctuation, fix_notes, tokenize_string

df = pd.read_csv('debate.csv')

# Investigating the list of stopwords below, I decided I did not want to
# exclude many of the words included. I, you, us, we, and gendered words
# are all interesting words to examine in a presidential debate.
# stopwords.words('english')

# Instead, I will exclude the following words, which are less meaningful
# in the context of debate dialogue.
exclude = list(map(lambda s: '\\s' + s + '\\s',
                   ['the', 'a', 'an', 'and', 'or', 'to', 'on', 'in',
                    'will', 'are', 'is', 'am', 'with', 'of', 'for', 'at',
                    'as', 'that', 'be', 'it', 'its'
                    ]))
stemmer = PorterStemmer()


def clean_line(text):
    text = fix_notes(text)
    text = expand_all(text)
    text = text.lower()
    text = remove_punctuation(text)

    # exclude debate only stop words
    text = reduce(lambda s, src: re.sub(src, ' ', s), exclude, text)
    tokens = [stemmer.stem(word)
              for word in tokenize_string(text)]
    return tokens

def fix_speaker(speaker):
    speaker = speaker.lower()
    if (speaker != 'clinton' and speaker != 'trump'):
        return 'other'
    return speaker


df_cleaned = df.assign(
    Speaker=df.Speaker.apply(fix_speaker)
).query(
    'Speaker != "other"'
).assign(
    TextClean=df.Text.apply(clean_line)
)

df_attr = df_cleaned.assign(
    Length=df_cleaned.Text.apply(lambda s: len(s)),
    Words=df_cleaned.TextClean.apply(lambda s: len(s)),
    Interrupt=df_cleaned.TextClean.apply(
        lambda s: s[-1] == '__ELLIPSIS__'),
    MentionClinton=df_cleaned.TextClean.apply(
        lambda s: 'clinton' in s or 'hillary' in s),
    MentionTrump=df_cleaned.TextClean.apply(
        lambda s: 'trump' in s or 'donald' in s),
)

vect = TfidfVectorizer(analyzer='word', input='file', ngram_range=(1, 3),
                       min_df=0, max_features=2000)
text_clean_docs = [StringIO(str(x)) for x in df_attr.TextClean]

# NOTE: this converts the tfidf sparse matrix into a dense array
#  Based on the relatively short length of the the dataframe (~600)
#  this isn't too bad on memory, but could be for larger sets
debate_tf = vect.fit_transform(text_clean_docs).toarray()
df_tf = pd.DataFrame(debate_tf, columns=vect.get_feature_names())

df_full = pd.concat([df_attr.reset_index(drop=True), df_tf], axis=1)

# Stores pandas df in a pickle state
#  Why not csv? This file isn't meant to be human read or traded around -
#  this is written to help break apart the scripts and allow incrementation
#  operation of the pipeline. CSV does not quite maintain the same data
#  between scripts, even if it is far smaller and portable
df_full.to_pickle(os.path.join(
    'generated', 'df_full_features.pickle'))
