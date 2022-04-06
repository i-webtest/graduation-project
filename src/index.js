"use strict";

import modal from "./modules/modal";
import validation from "./modules/validation";
import sendForm from "./modules/sendForm";

modal();
validation();
sendForm({ formId: ["form-callback"] });
