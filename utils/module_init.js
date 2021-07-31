const replace = require("replace-in-file");

async function init(new_name) {
  const options = {
    files: process.cwd(),
    from: /webresto-module-starter/g,
    to: new_name,
  };

  try {
    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    // console.error('Error occurred:', error);
  }
}

init(process.argv[0]);
