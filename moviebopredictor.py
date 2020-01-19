import pandas as pd
import numpy as np
import sklearn




def clean(file):
    global description
    global df
    df = pd.read_csv(file)
    df = df.drop(columns=["id", "imdb_id", "Keywords", "tagline", "status", "overview", "original_title", "homepage", "production_countries", "title"])
    description = df.describe(include="all")
    print(df.isna().sum().sort_values(ascending=False))
    print(df["belongs_to_collection"])
    df["belongs_to_collection"] = df["belongs_to_collection"].fillna(value = 0)
    df.loc[df["belongs_to_collection"] != 0, "belongs_to_collection"] = 1



clean("train.csv")