# -*- coding: utf-8 -*-
#!/usr/bin/env python

# Core Imports
import os

# Data
import pandas as pd

# Models
from sklearn.ensemble import RandomForestClassifier
from sklearn.cross_validation import cross_val_score
from sklearn.metrics import roc_curve, auc


df = pd.read_pickle(os.path.join(
    'generated', 'df_full_features.pickle'))

# Training is first two debates, testing is last
df_train = df.query('Date != "10/19/2016"')
df_test = df.query('Date == "10/19/2016"')

feature_columns_available = [
    'Line', 'Speaker', 'Text', 'Date', 'TextClean']


clf = RandomForestClassifier(
    n_estimators=100, max_depth=10, max_features=500)
scores = cross_val_score(clf, df_train.drop(
    feature_columns_available, axis=1), df_train.Speaker, cv=5)

print("Cross Validated Score: {}".format(scores.mean()))




clf = RandomForestClassifier(
    n_estimators=100, max_depth=10, max_features=500)
clf_fit = clf.fit(
    df_train.drop(feature_columns_available, axis=1), df_train.Speaker)

print(df_test.Speaker[:10])
print(clf_fit.predict(df_test.drop(feature_columns_available, axis=1))[:10])
print(clf_fit.predict_proba(df_test.drop(feature_columns_available, axis=1))[:10])
print("Test Score: {}".format(clf_fit.score(df_test.drop(feature_columns_available, axis=1), df_test.Speaker)))

proba = clf_fit.predict_proba(df_test.drop(feature_columns_available, axis=1))

proba_diff = list(map(lambda x: abs(x[0] - x[1]), proba))
proba_contested = list(map(lambda x: x < 0.6, proba_diff))
# len(list(filter(lambda x: x < 0.6, proba_diff)))

df_test[proba_contested][["Speaker","Text"]].to_csv("generated/out.text.csv")
