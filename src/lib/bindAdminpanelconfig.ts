import { AdminpanelConfig } from "sails-adminpanel/interfaces/adminpanelConfig"
export default function bindAdminpanelconfig () {
  let configAdminpanel: AdminpanelConfig = { 
    models:{ 
      example: {
        title: 'Example',
        model: 'example',
        icon: "box",
        fields: {
          id: false,
        }
      } 
    }
  }

  //  Merge config adminpanel
  if(sails.config.adminpanel && configAdminpanel){
    let models = {...sails.config.adminpanel.models}
    sails.config.adminpanel.models = {...models, ...configAdminpanel.models}
  }
}