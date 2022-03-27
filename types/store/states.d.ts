declare namespace NStates {
  interface IGlobalSettings {
    mainMenuCollection: Object;
    headerLogo: string;
    telephonenumber: string;
    email: string;
    address: string;
    linkedIn: string;
    facebook: string;
    instagram: string;
    youtube: string;
    contactFormTitle: string;
    contactFormSuccessMessage: string;
  }
  export interface IGlobalSettingsState {
    globalSettings: IGlobalSettings;
    isApplicationReady: Boolean;
  }
}
