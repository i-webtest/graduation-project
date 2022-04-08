"use strict";

import modal from "./modules/modal";
import validation from "./modules/validation";
import sendForm from "./modules/sendForm";
import smoothScroll from "./modules/scroll";
import topSlider from "./modules/topSlider";
import accordeon from "./modules/accordeon";
import slider from "./modules/slider";
import mobileMenu from "./modules/mobileMenu";

modal();
validation();
sendForm({ formId: "form1" });
smoothScroll();
topSlider();
accordeon();
slider();
mobileMenu();
