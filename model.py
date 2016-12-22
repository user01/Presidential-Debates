# -*- coding: utf-8 -*-
#!/usr/bin/env python

# Core Imports
import os

# Data
import pandas as pd

# Models
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import roc_curve, auc


df = pd.read_pickle(os.path.join(
    'generated', 'df_full_features.pickle'))

# Training is first two debates, testing is last
df_train = df.query('Date != "10/19/2016"')
df_test = df.query('Date == "10/19/2016"')

feature_columns_to_ignore = [
    'Line', 'Speaker', 'Text', 'Date', 'TextClean']


clf = RandomForestClassifier(
    n_estimators=100, max_depth=10, max_features=500)
clf_fit = clf.fit(
    df_train.drop(feature_columns_to_ignore, axis=1), df_train.Speaker)

# print(df_test.Speaker[:10])
# print(clf_fit.predict(df_test.drop(
#     feature_columns_to_ignore, axis=1))[:10])
# print(clf_fit.predict_proba(df_test.drop(
#     feature_columns_to_ignore, axis=1))[:10])
print("Final Test Score: {:5.2f}%".format(clf_fit.score(df_test.drop(
    feature_columns_to_ignore, axis=1), df_test.Speaker) * 100))

proba = clf_fit.predict_proba(
    df_test.drop(feature_columns_to_ignore, axis=1))

df_full_a = pd.concat([df_test[["Speaker", "Text"]].reset_index(drop=True),
                       pd.DataFrame(proba).rename(
    columns={0: "ClintonProbability", 1: "TrumpProbability"})], axis=1)

df_full_b = df_full_a.assign(SpeakerPredicted=df_full_a.ClintonProbability.apply(
    lambda x: 'clinton' if x >= 0.5 else 'trump'))

df_full_c = df_full_b.assign(
    CorrectPrediction=df_full_b.SpeakerPredicted == df_full_b.Speaker)

# Final DataFrame has speaker, original text, probablities, and helper
#  predictions and success

df_full_c.to_json(os.path.join(
    'generated', 'model.results.json'), orient='records')
