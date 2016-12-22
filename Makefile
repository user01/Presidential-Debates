
generated/debate_tf.csv:
	python feature_engineering.py

clean:
	-$(RM) generated/*.csv
	-$(RM) generated/*.pickle
