//require('./login');
import {login} from "./login";
require('../css/bootstrap.css');
require('../css/styles.scss');

login('admin','1234');
document.write("Hola mundo!!!");
console.log("aplicación inicializada");
