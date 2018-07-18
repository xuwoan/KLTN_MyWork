package com.mywork;
import android.os.Bundle;

// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; 
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
         SplashScreen.show(this);  // here
        return "MyWork";
    }
}
