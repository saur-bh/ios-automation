# Bitfinex -IOS Automation 
Although the samples are checked in, updating them requires a few manual steps:

* xcode is installed 

* install the build (.app) on simulator 

* get udid of the device or boot it 
`xcrun simctl list devices booted`

* launch terminal 

* Run the following command to install Maestro on Mac OS 
    `curl -Ls "https://get.maestro.mobile.dev" | bash`

*  Open terminal and login to maestro 
    `maestro`

* To run smoke test PROD 

  ` maestro  test driver --output report/test.xml `

![alt text](image/image.png)
- choose option 2 and select device where you have install ap 
![alt text](image/image-1.png)


![alt text](image/image-2.png)

- additonally you can start your simulator before.


* Some Error 
 type maestro  
- ERROR: JAVA_HOME is set to an invalid directory: /Library/Java/Home
 Set export JAVA_HOME=`/usr/libexec/java_home`




