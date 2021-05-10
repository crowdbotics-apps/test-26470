import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f24/a80b/7eb30c09dd56e207e1830ca7c02aad57"
        }}
        style={styles.ImageBackground_1_5}
      />
      <View style={styles.View_1_7}>
        <View style={styles.View_1_8}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2bc/5185/52348867d767ce81ac9b5da2c986bf0d"
            }}
            style={styles.ImageBackground_1_9}
          />
        </View>
      </View>
      <View style={styles.View_6_167}>
        <View style={styles.View_6_168}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2bc/5185/52348867d767ce81ac9b5da2c986bf0d"
            }}
            style={styles.ImageBackground_6_169}
          />
        </View>
      </View>
      <View style={styles.View_1_34}>
        <Text style={styles.Text_1_34}>Food</Text>
      </View>
      <View style={styles.View_1_35}>
        <Text style={styles.Text_1_35}>Delivery</Text>
      </View>
      <View style={styles.View_1_36}>
        <View style={styles.View_1_37}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd4e/e246/503e85e2a6a6381b23c0a92395c380a9"
            }}
            style={styles.ImageBackground_1_38}
          />
        </View>
      </View>
      <View style={styles.View_6_173}>
        <View style={styles.View_6_174}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd4e/e246/503e85e2a6a6381b23c0a92395c380a9"
            }}
            style={styles.ImageBackground_6_175}
          />
        </View>
      </View>
      <View style={styles.View_1_55}>
        <Text style={styles.Text_1_55}>Search...</Text>
      </View>
      <View style={styles.View_1_56}>
        <Text style={styles.Text_1_56}>Categories</Text>
      </View>
      <View style={styles.View_4_77}>
        <Text style={styles.Text_4_77}>Popular</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d506/df7f/c92cd86852a7c3c7fa56ef6445c272ec"
        }}
        style={styles.ImageBackground_1_72}
      />
      <View style={styles.View_4_46}>
        <View style={styles.View_4_43}>
          <View style={styles.View_1_57} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978b/c9d2/b9badb29da2f1279eea8acb0ed37079f"
          }}
          style={styles.ImageBackground_1_73}
        />
        <View style={styles.View_1_74}>
          <Text style={styles.Text_1_74}>Pizza</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e340/0d08/3003fe6bd4cdcdbdc8e3655aa9b31833"
          }}
          style={styles.ImageBackground_4_0}
        />
        <View style={styles.View_4_18}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6ca/a4f7/59816c6b86391dceb9bcd666055b9996"
            }}
            style={styles.ImageBackground_4_19}
          />
        </View>
      </View>
      <View style={styles.View_4_47}>
        <View style={styles.View_4_48}>
          <View style={styles.View_4_49} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/747b/7a62/0682fdc73c17df50b803da6156822f46"
          }}
          style={styles.ImageBackground_4_50}
        />
        <View style={styles.View_4_51}>
          <Text style={styles.Text_4_51}>Seafood</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df64/e9a9/e4b46d5d352971288cc931f132792805"
          }}
          style={styles.ImageBackground_4_74}
        />
        <View style={styles.View_4_53}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0bc/32e0/d0c38b68c27e06dd7c12a0ff549cb808"
            }}
            style={styles.ImageBackground_4_54}
          />
        </View>
      </View>
      <View style={styles.View_4_56}>
        <View style={styles.View_4_57}>
          <View style={styles.View_4_58} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/747b/7a62/0682fdc73c17df50b803da6156822f46"
          }}
          style={styles.ImageBackground_4_59}
        />
        <View style={styles.View_4_60}>
          <Text style={styles.Text_4_60}>Soft Drinks</Text>
        </View>
        <View style={styles.View_4_62}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0bc/32e0/d0c38b68c27e06dd7c12a0ff549cb808"
            }}
            style={styles.ImageBackground_4_63}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/122f/515e/096232c6242285298ce9a16bf2059067"
        }}
        style={styles.ImageBackground_4_75}
      />
      <View style={styles.View_4_128}>
        <View style={styles.View_4_129} />
        <View style={styles.View_4_78} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ab/a6fc/520dd1cd692d52205fa1cd4db6fb2908"
          }}
          style={styles.ImageBackground_4_127}
        />
        <View style={styles.View_4_100}>
          <Text style={styles.Text_4_100}>Weight 540 gr</Text>
        </View>
        <View style={styles.View_4_99}>
          <Text style={styles.Text_4_99}>Primavera Pizza</Text>
        </View>
        <View style={styles.View_4_124}>
          <Text style={styles.Text_4_124}>5.0</Text>
        </View>
        <View style={styles.View_4_98}>
          <Text style={styles.Text_4_98}>top of the week</Text>
        </View>
        <View style={styles.View_4_79}>
          <View style={styles.View_4_80}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c33/d7f9/c80507427e32fafba8b0e5fd76fcaadf"
              }}
              style={styles.ImageBackground_4_81}
            />
          </View>
        </View>
        <View style={styles.View_4_101} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0317/97d5/bc90d88316c66064dd033236b98e63bc"
          }}
          style={styles.ImageBackground_4_102}
        />
        <View style={styles.View_4_104}>
          <View style={styles.View_4_105}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5800/0dc6/2821d838fa7654c1ac230b1f38753cd3"
              }}
              style={styles.ImageBackground_4_106}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_4_130}>
        <View style={styles.View_4_131} />
        <View style={styles.View_4_132} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ab/a6fc/520dd1cd692d52205fa1cd4db6fb2908"
          }}
          style={styles.ImageBackground_4_133}
        />
        <View style={styles.View_4_134}>
          <Text style={styles.Text_4_134}>Weight 540 gr</Text>
        </View>
        <View style={styles.View_4_135}>
          <Text style={styles.Text_4_135}>Primavera Pizza</Text>
        </View>
        <View style={styles.View_4_136}>
          <Text style={styles.Text_4_136}>5.0</Text>
        </View>
        <View style={styles.View_4_137}>
          <Text style={styles.Text_4_137}>top of the week</Text>
        </View>
        <View style={styles.View_4_138}>
          <View style={styles.View_4_139}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c33/d7f9/c80507427e32fafba8b0e5fd76fcaadf"
              }}
              style={styles.ImageBackground_4_140}
            />
          </View>
        </View>
        <View style={styles.View_4_142} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0317/97d5/bc90d88316c66064dd033236b98e63bc"
          }}
          style={styles.ImageBackground_4_143}
        />
        <View style={styles.View_4_145}>
          <View style={styles.View_4_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5800/0dc6/2821d838fa7654c1ac230b1f38753cd3"
              }}
              style={styles.ImageBackground_4_147}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_5: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("8.19672131147541%")
  },
  View_1_7: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26666666666667%"),
    top: hp("9.289617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_8: {
    width: wp("6.399983215332031%"),
    height: hp("1.639337748126254%"),
    top: hp("0.8196763002155905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_9: {
    width: wp("6.399983215332031%"),
    height: hp("1.639337748126254%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_167: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26666666666667%"),
    top: hp("9.289617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_6_168: {
    width: wp("6.399983215332031%"),
    height: hp("1.639337748126254%"),
    top: hp("0.8196763002155905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_169: {
    width: wp("6.399983215332031%"),
    height: hp("1.639337748126254%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_34: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("17.759562841530055%")
  },
  Text_1_34: {
    color: "rgba(49, 50, 52, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_35: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("21.174863387978142%")
  },
  Text_1_35: {
    color: "rgba(49, 50, 52, 1)",
    fontSize: 26,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_36: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("31.420765027322407%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_37: {
    width: wp("4.266671752929688%"),
    height: hp("2.185770852969644%"),
    top: hp("0.00002084534024859863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_38: {
    width: wp("4.266671752929688%"),
    height: hp("2.185770852969644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_173: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("31.420765027322407%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_6_174: {
    width: wp("4.266671752929688%"),
    height: hp("2.185770852969644%"),
    top: hp("0.00002084534024859863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_175: {
    width: wp("4.266671752929688%"),
    height: hp("2.185770852969644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_55: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("30.601092896174865%")
  },
  Text_1_55: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_56: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("37.84153005464481%")
  },
  Text_1_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_77: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("69.53551912568307%")
  },
  Text_4_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_72: {
    width: wp("82.3999755859375%"),
    minWidth: wp("82.3999755859375%"),
    height: hp("0.14024287299380275%"),
    minHeight: hp("0.14024287299380275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("33.602926118777745%")
  },
  View_4_46: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("42.62295081967213%")
  },
  View_4_43: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_57: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 202, 72, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_1_73: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("17.896174863387976%")
  },
  View_1_74: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.8%"),
    top: hp("12.841530054644807%")
  },
  Text_1_74: {
    color: "rgba(49, 50, 52, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_0: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("3.278688524590166%"),
    resizeMode: "cover"
  },
  View_4_18: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999999%"),
    top: hp("19.125683060109296%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_4_19: {
    width: wp("1.3446661631266277%"),
    height: hp("1.0928936994792333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.39433390299479143%")
  },
  View_4_47: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("42.62295081967213%")
  },
  View_4_48: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_49: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_4_50: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%"),
    top: hp("17.896174863387976%")
  },
  View_4_51: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("12.841530054644807%")
  },
  Text_4_51: {
    color: "rgba(49, 50, 52, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_74: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666674%"),
    top: hp("3.278688524590166%"),
    resizeMode: "cover"
  },
  View_4_53: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.800000000000004%"),
    top: hp("19.125683060109296%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_4_54: {
    width: wp("1.3446661631266277%"),
    height: hp("1.0928936994792333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.39433326721191264%")
  },
  View_4_56: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("42.62295081967213%")
  },
  View_4_57: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_58: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_4_59: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333329%"),
    top: hp("17.896174863387976%")
  },
  View_4_60: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("12.841530054644807%")
  },
  Text_4_60: {
    color: "rgba(49, 50, 52, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_62: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    top: hp("19.125683060109296%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_4_63: {
    width: wp("1.3446661631266277%"),
    height: hp("1.0928936994792333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3943318684895871%")
  },
  ImageBackground_4_75: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.2%"),
    top: hp("45.90163934426229%"),
    resizeMode: "cover"
  },
  View_4_128: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("73.77049180327869%")
  },
  View_4_129: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_4_78: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_4_127: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333332%"),
    top: hp("2.4590163934426243%"),
    resizeMode: "cover"
  },
  View_4_100: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("11.338797814207652%")
  },
  Text_4_100: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_99: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("8.333333333333329%")
  },
  Text_4_99: {
    color: "rgba(49, 50, 52, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_124: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("17.349726775956285%")
  },
  Text_4_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_98: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.199999999999998%"),
    top: hp("3.278688524590166%")
  },
  Text_4_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_79: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("3.6885245901639365%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_80: {
    width: wp("3.2%"),
    height: hp("1.1526639344262295%"),
    top: hp("0.2433401639344197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00008138020833570181%")
  },
  ImageBackground_4_81: {
    width: wp("3.2%"),
    height: hp("1.1526639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_101: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(245, 202, 72, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25
  },
  ImageBackground_4_102: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666666%")
  },
  View_4_104: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333336%"),
    top: hp("17.759562841530055%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_105: {
    width: wp("2.666666666666667%"),
    height: hp("1.3150561702707426%"),
    top: hp("0.025531372737361835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_106: {
    width: wp("2.666666666666667%"),
    height: hp("1.3150561702707426%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_130: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("98.49726775956285%")
  },
  View_4_131: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_4_132: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_4_133: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333332%"),
    top: hp("2.45901639344261%"),
    resizeMode: "cover"
  },
  View_4_134: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("11.338797814207652%")
  },
  Text_4_134: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_135: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("8.333333333333329%")
  },
  Text_4_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_136: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("17.34972677595627%")
  },
  Text_4_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_137: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.199999999999998%"),
    top: hp("3.278688524590166%")
  },
  Text_4_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_138: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("3.6885245901639365%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_139: {
    width: wp("3.2%"),
    height: hp("1.1526639344262295%"),
    top: hp("0.2433401639344055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00008138020833570181%")
  },
  ImageBackground_4_140: {
    width: wp("3.2%"),
    height: hp("1.1526639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_142: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(245, 202, 72, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25
  },
  ImageBackground_4_143: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    top: hp("17.75956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666666%")
  },
  View_4_145: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333336%"),
    top: hp("17.75956284153004%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_146: {
    width: wp("2.666666666666667%"),
    height: hp("1.3150561702707426%"),
    top: hp("0.025531372737376046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_147: {
    width: wp("2.666666666666667%"),
    height: hp("1.3150561702707426%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
