Pressable
#
#
        <Pressable
                  onPress={onPressHandler}
                  hitSlop={{top:10, bottom:10, right:10, left:10}}
                  android_ripple={{color='#000000'}}
                  style={({pressed})=>[
                    {backgroundColor: pressed ? '#aaaaaa' : '#b3b3'},
                    styles.button
                  ]}
        >
          <Text Text style={styles.text}>
            {submitted ? "clear" : "submit"}
          </Text>
        </Pressable>
#
#
#
 <TouchableWithoutFeedback         
          onPress={onPressHandler}
        >
        <View>
        style={styles.button}
        <Text Text style={styles.text}>
            {submitted ? "clear" : "submit"}
          </Text>
        </View>
         
        </TouchableWithoutFeedback>
#
#
#
 <TouchableHighlight
          //accepts styling.
          style={styles.button}
          onPress={onPressHandler}
          // reduces the opacity when clicked and by default it's 0.2
          // we can modify it by using the active opacity prop i.e
          underlayColor = '#dddddd'
        >
          <Text Text style={styles.text}>
            {submitted ? "clear" : "submit"}
          </Text>
        </TouchableHighlight>
#
#
#
    <TouchableOpacity
        //accepts styling.
        style={styles.button}
        onPress={onPressHandler}
        // reduces the opacity when clicked and by default it's 0.2
        // we can modify it by using the active opacity prop i.e
        activeOpacity={0.8}
        // the lower the value the higher the opacity
      >
        <Text Text style={styles.text}>
          {submitted ? "clear" : "submit"}
        </Text>
      </TouchableOpacity>
#
#
#
The following closely relate just some minor differences 
eg Touchable opacity gives the feeling and you can see the opacity of the button changes on click
> we use active opacity to change that behavior the and the values range upto 1 with one being the highest and the lower the more the opacity
#Pressable we defined the style dynamically to change the color upon click and it takes an object. The argument of the arrow function always returns pressed.
#
####Inhindsigst all of them are closely related just some minor differences seee the source code.
