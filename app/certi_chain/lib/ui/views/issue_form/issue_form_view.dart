
import 'dart:developer';

import 'package:certi_chain/file_exporter.dart';
import 'package:certi_chain/utils/helper_function.dart';

part 'issue_form_view_components.dart';
part 'issue_form_view_model.dart';

class IssueFormView extends StatelessWidget {
  final String orgName;
  const IssueFormView({
    Key? key,
    required this.orgName,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<IssueFormViewModel>.nonReactive(
      viewModelBuilder: () => IssueFormViewModel(),
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
                            enabled: false,
                            keyboardType: TextInputType.name,
                            decoration: InputDecoration(
                              hintText: HelperFunction.name,
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
                              'Certificate Name',
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
                            controller: model.certNameController,
                            keyboardType: TextInputType.emailAddress,
                            decoration: InputDecoration(
                              hintText: 'Enter name of the certificate',
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
                              'Organization Name',
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
                            enabled: false,
                            keyboardType: TextInputType.datetime,
                            decoration: InputDecoration(
                              hintText: orgName,
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
                            enabled: false,
                            keyboardType: TextInputType.number,
                            decoration: InputDecoration(
                              hintText: HelperFunction.aadharNumber,
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
                              backgroundColor: context.colorScheme.submitButton,
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
          ),
        );
      },
    );
  }
}
