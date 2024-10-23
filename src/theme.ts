// Define the interface for the theme properties
export interface Theme {
    backgroundColor: string;
    secondaryBackgroundColor: string;
    mainTextColor: string;
    titleTextColor: string;
    importantInformationTextColor: string;
    accentColor: string;
    secondaryAccentColor: string;
    bottomBarBackgroundColor: string;
    bottomBarSelectedIconColor: string;
    bottomBarUnselectedIconColor: string;
    topBarBackgroundColor: string;
    topBarIconTextColor: string;
    statusBarTheme: "light" | "dark";
  }
  
  // Define the default theme that will be replaced during app generation
  const theme: Theme = {
    backgroundColor: "${backgroundColor}",
    secondaryBackgroundColor: "${secondaryBackgroundColor}",
    mainTextColor: "${mainTextColor}",
    titleTextColor: "${titleTextColor}",
    importantInformationTextColor: "${importantInformationTextColor}",
    accentColor: "${accentColor}",
    secondaryAccentColor: "${secondaryAccentColor}",
    bottomBarBackgroundColor: "${bottomBarBackgroundColor}",
    bottomBarSelectedIconColor: "${bottomBarSelectedIconColor}",
    bottomBarUnselectedIconColor: "${bottomBarUnselectedIconColor}",
    topBarBackgroundColor: "${topBarBackgroundColor}",
    topBarIconTextColor: "${topBarIconTextColor}",
    statusBarTheme: "${statusBarTheme}" as "light" | "dark",
  };
  
  export default theme;
  