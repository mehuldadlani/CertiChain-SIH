import 'dart:convert';
import 'dart:developer';

import 'package:certi_chain/file_exporter.dart';
import 'package:http/http.dart' as http;

part 'user_details_view_components.dart';
part 'user_details_view_model.dart';

class UserDetailView extends StatelessWidget {
  const UserDetailView({super.key});

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<UserDetailViewModel>.nonReactive(
      viewModelBuilder: () => UserDetailViewModel(),
      builder: (context, model, child) {
        return Scaffold(
            body: SingleChildScrollView(
          child: Column(children: [
            60.hGap,
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 85.wWise),
              child: Image.asset(
                'assets/img/splash_logo.png',
                height: 40.hWise,
              ),
            ),
            20.hGap,
            Material(
              elevation: 20,
              borderRadius: BorderRadius.circular(20),
              child: Container(
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                      color: context.colorScheme.authContainer,
                      borderRadius: BorderRadius.circular(20)),
                  height: 630.hWise,
                  width: 330.wWise,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      20.hGap,
                      Align(
                        alignment: Alignment.center,
                        child: Text(
                          'Enter your Details',
                          style: GoogleFonts.inder(
                            fontSize: 25.hWise,
                          ),
                        ),
                      ),
                      30.hGap,
                      Padding(
                        padding: EdgeInsets.only(left: 20.wWise),
                        child: Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            'NAME',
                            style: GoogleFonts.inder(
                              fontSize: 20.hWise,
                            ),
                          ),
                        ),
                      ),
                      10.hGap,
                      Container(
                        width: 300.wWise,
                        child: TextField(
                          controller: model.nameController,
                          keyboardType: TextInputType.name,
                          decoration: InputDecoration(
                            hintText: 'Enter your name',
                            hintStyle: GoogleFonts.inder(
                              fontSize: 15.hWise,
                            ),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                          ),
                        ),
                      ),
                      20.hGap,
                      Padding(
                        padding: EdgeInsets.only(left: 20.wWise),
                        child: Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            'EMAIL',
                            style: GoogleFonts.inder(
                              fontSize: 20.hWise,
                            ),
                          ),
                        ),
                      ),
                      10.hGap,
                      Container(
                        width: 300.wWise,
                        child: TextField(
                          controller: model.emailController,
                          keyboardType: TextInputType.emailAddress,
                          decoration: InputDecoration(
                            hintText: 'Enter your e-mail',
                            hintStyle: GoogleFonts.inder(
                              fontSize: 15.hWise,
                            ),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                          ),
                        ),
                      ),
                      20.hGap,
                      Padding(
                        padding: EdgeInsets.only(left: 20.wWise),
                        child: Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            'DOB',
                            style: GoogleFonts.inder(
                              fontSize: 20.hWise,
                            ),
                          ),
                        ),
                      ),
                      10.hGap,
                      Container(
                        width: 300.wWise,
                        child: TextField(
                          controller: model.dobController,
                          keyboardType: TextInputType.datetime,
                          decoration: InputDecoration(
                            hintText: 'Enter your DOB (mm/dd/yyyy)',
                            hintStyle: GoogleFonts.inder(
                              fontSize: 15.hWise,
                            ),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                          ),
                        ),
                      ),
                      20.hGap,
                      Padding(
                        padding: EdgeInsets.only(left: 20.wWise),
                        child: Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            'Aadhar Number',
                            style: GoogleFonts.inder(
                              fontSize: 20.hWise,
                            ),
                          ),
                        ),
                      ),
                      10.hGap,
                      Container(
                        width: 300.wWise,
                        child: TextField(
                          keyboardType: TextInputType.number,
                          controller: model.aadharController,
                          decoration: InputDecoration(
                            hintText: 'Enter your aadhar number',
                            hintStyle: GoogleFonts.inder(
                              fontSize: 15.hWise,
                            ),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                          ),
                        ),
                      ),
                      30.hGap,
                      Container(
                        height: 50.hWise,
                        width: 180.wWise,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            primary: context.colorScheme.submitButton,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20),
                            ),
                          ),
                          child: const Text('Submit'),
                          onPressed: () => model.handleSubmitButton(context),
                        ),
                      )
                    ],
                  )),
            ),
            20.hGap,
          ]),
        ));
      },
    );
  }
}
