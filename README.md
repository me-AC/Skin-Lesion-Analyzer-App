
## Skin-Lesion-Analyzer


<br>

<img src="http://skin.test.woza.work/assets/app_pic.png" width="350"></img>

<br>

This is a prototype for a freely available online tool that can tell doctors and lab technologists the three highest probability diagnoses for a given skin lesion. It could help them quickly identify high risk patients and speed up their workflow. The app will produce a result in less than 3 seconds. To ensure privacy, user submitted images are pre-processed and analyzed locally and are never uploaded to an external server. 

This app is powered by Artifical Intelligence. My goal for this project was to build an end to end solution - starting with model creation and ending with a live web app. Users are able to submit a picture of a skin lesion and get an instant prediction. 

The app is able to classify 7 types of skin lesions as described in this paper:

The HAM10000 Dataset: A Large Collection of Multi-Source Dermatoscopic Images of Common Pigmented Skin Lesions<br>
https://arxiv.org/abs/1803.10417

All the javascript, css and html files are freely available here. The trained model is also available.

<hr>

<b>Bugs & Lessons Learned</b>

1. If the model is not loading into your website:<br>
If you uploaded the model using FileZilla then the default transfer setting may need to be changed.<br>
Go to Settings->Transfers->File_Types and set the default transfer type to Binary.<br> 
Then upload the model to the server again.

2. When trouble shooting your website ensure that your browser is in "Incognito" mode. Otherwise it will load the model (and site) that is stored in the cache and you will not be looking at the latest version of the model.

3. Create the model in Keras and convert it to Tensorflow.js without first saving it. If you save it, load a saved model then convert - the model may not work when loaded into your site.

4. A converted tf.keras model does not work when loaded into at the app. A native Keras model must be used. When I say, 'does not work' I mean that either the model will not load into the app or if it loads, it will not output a prediction.

5. Another complication - If you don't use tf.keras then the accuracy as calculated from the confusion matrix will not match the accuracy obtained during training and evaluation. I think there is a problem with predict_generator() in native Keras - or maybe I'm using it wrong.

6. The app does not work in OSX Safari. It's best to use the latest version of Chrome. When developing Tensorflowjs based apps browser support needs to be kept in mind.

7. Some image datasets contain images in TIF format. Web browsers don't support TIF format. Therefore, users will need to submit images in jpg or png format. Therefore, when training the model it's important to convert the training images to jpg or png before using them for training. If you don't do this then you will find the predictions from the app will not match the predictions from the model - the app predictions will be bad.

8. There are slight differences in the predicted probabilities when images are submitted via pc and via mobile phone. This appears to indicate that the mobile browser may be somehow modifying the image before it gets submitted to the model for prediction.

9. From Tensorflow.js version 1.0.0 and beyond it's possible to add a progress bar by using onProgress. The progress bar gives the user a nice visual cue during model download. Also, when a user returns to the app later, a full progress bar tells the user that a cached model is instantly available so he/she won't need to wait for download. The downside is that when a progress bar is added the model download becomes unreliable if the internet connection is slow. In fact model download regularly fails.










