export default function bindAdminpanelconfig () {
  let configAdminpanel = { 
    models:{ 
      Example: {
        title: 'Example',
        model: 'example',
        fields: {
          id: false,
        }
      } 
    }
  }

  //  Merge config adminpanel
  if(sails.config.adminpanel && configAdminpanel){
    let models = {...sails.config.adminpanel.models}
    sails.config.adminpanel.models = {...models, ...configAdminpanel}
  }
}