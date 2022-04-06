"use strict";

import modal from "./modules/modal";
import validation from "./modules/validation";
import sendForm from "./modules/sendForm";
import smoothScroll from "./modules/scroll";

modal();
validation();
sendForm({ formId: "form1" });
smoothScroll();
