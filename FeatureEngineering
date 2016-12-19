import numpy as np
import pandas as pd
import os

# Text Data
import re
import nltk
from nltk import pos_tag
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords, wordnet
from sklearn.feature_extraction.text import TfidfVectorizer
from io import StringIO

path = '/Users/kaleyhanrahan/UVaMSDS/DS6001/PythonHW/ExtraCredit-DataCleaning/'
file = 'debate.csv'
df = pd.read_csv(path+file, encoding='iso-8859-1')

df.shape # =(1389, 4)
df.head()
#df[1379:1389]

## Investigating the list of stopwords below, I decided I did not want to
##  exclude many of the words included. I, you, us, we, and gendered words
##  are all interesting words to examine in a presidential debate.
#stopwords.words("english")

## Instead, I will exclude the following words, which are less meaningful
##  in the context of debate dialogue.
exclude = [' the ',' a ',' an ',' and ',' or ',' to ',' on ',' in ',' will ',\
       ' are ',' is ',' am ',' with ',' of ',' for ',' at ',' as ', ' that ',\
       ' be ', ' it ', ' its '
      ]
      
lines=[]

def clean(debateData):
    
    for row in debateData:
        ## Tag '...' as an interruption with '_I', indicating an incomplete thought
        lines = debateData.replace('...', ' _I')
        ## Remove punctuation
        lines = re.sub(r'[\.,\?\'\"-:;]','',lines)
        ## Convert to lowercase
        lines = lines.lower()
        
        for i in exclude:
            lines = lines.replace(i, ' ')

        
        phrases = re.split(r'[;:\.()\n]', str(lines))
        phrases = [re.findall(r'[\w%\*&#]+', ph) for ph in phrases]
        phrases = [ph for ph in phrases if ph]

        words = []       
        for ph in phrases:
            words.extend(ph)

        tmp = words
        words = []
        new_word = ''
        for word in tmp:
            if len(word) == 1:
                new_word = new_word + word
            else:
                if new_word:
                    words.append(new_word)
                    new_word = ''
                words.append(word)
                
        lemmatizer = WordNetLemmatizer()
        lemmatized = [lemmatizer.lemmatize(x) for x in words]
        
        return(lemmatized)
        
train_x = df['Text'].apply(clean)
train_x

swds = stopwords.words('english')
vect = TfidfVectorizer(analyzer = "word",input="file", ngram_range = (1,3),\
                       min_df = 0, stop_words = swds, max_features=5000)
docs_new = [StringIO(str(x)) for x in train_x]
debate_tf = vect.fit_transform(docs_new).toarray()

vocab = vect.get_feature_names()
print(pd.Series(vocab)[:1000])

# Save file
np.savetxt('debate_clean.csv', debate_tf, delimiter=',')
