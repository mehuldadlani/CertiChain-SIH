//NOTE!! DO NOT EXPORT VIEWS AND VIEW MODELS IN THE FILE EXPORTER
//THEY ARE MEANT TO BE ACCESSED ONLY THROUGH ROUTES IN NAVIGATION

export 'package:flutter/material.dart';
export 'package:certi_chain/utils/extensions.dart';
export 'package:certi_chain/themes/app_colors.dart';
export 'package:certi_chain/app/app.locator.dart';
export 'package:certi_chain/app/app.router.dart';

//Auth
export 'package:certi_chain/services/auth_logic.dart';

//Dependencies

export 'package:stacked/stacked.dart';
export 'package:stacked_services/stacked_services.dart';
export 'package:stacked_hooks/stacked_hooks.dart';
export 'package:google_fonts/google_fonts.dart';
export 'package:easy_widgets/easy_widget.dart';
export 'package:http/http.dart';
export 'package:particle_auth/particle_auth.dart';
export 'package:animated_splash_screen/animated_splash_screen.dart';
export 'package:oktoast/oktoast.dart';
export 'package:feather_icons/feather_icons.dart';