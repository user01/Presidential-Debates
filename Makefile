
generated/model.results.json: generated/debate_tf.csv
	python model.py

generated/debate_tf.csv:
	python feature_engineering.py

clean:
	-$(RM) generated/*.csv
	-$(RM) generated/*.pickle
	-$(RM) generated/*.json
