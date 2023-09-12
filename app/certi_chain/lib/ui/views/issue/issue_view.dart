import 'package:certi_chain/file_exporter.dart';
import 'package:stacked/stacked.dart';

part 'issue_view_model.dart';
part 'issue_view_components.dart';

class IssueView extends StatelessWidget {
  const IssueView({super.key});

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<IssueViewModel>.nonReactive(
      viewModelBuilder: () => IssueViewModel(),
      builder: (context, model, child) {
        return ViewModelBuilder<IssueViewModel>.reactive(
            viewModelBuilder: () => IssueViewModel(),
            builder: (context, bottomNavModel, child) {
              return Scaffold(
                  appBar: AppBar(
                    backgroundColor: const Color(0xFFE6EDBF),
                    elevation: 0,
                    leading: IconButton(
                      icon: Icon(
                        Icons.arrow_back_ios,
                        color: Colors.black,
                      ),
                      onPressed: () {
                        Navigator.pop(context);
                      },
                    ),
                    title: Image.asset(
                      'assets/img/splash_logo.png',
                      height: 40,
                    ),
                  ),
                  backgroundColor: Color(0xFFE6EDBF),
                  body: SingleChildScrollView(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        40.hGap,
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            GestureDetector(
                              onTap: () =>
                                  model.onTapHandler(orgName: 'IIT Bombay'),
                              child: Material(
                                elevation: 20,
                                borderRadius: BorderRadius.circular(30),
                                child: Container(
                                    decoration: BoxDecoration(
                                        color: Color(0xffEDEBEB),
                                        borderRadius:
                                            BorderRadius.circular(30)),
                                    height: 170.hWise,
                                    width: 170.wWise,
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceEvenly,
                                      children: [
                                        Container(
                                          decoration: BoxDecoration(
                                              color: Colors.white,
                                              borderRadius:
                                                  BorderRadius.circular(20)),
                                          height: 100.hWise,
                                          width: 100.wWise,
                                          child: Image.asset(
                                            'assets/img/iitb.png',
                                            height: 200.hWise,
                                          ),
                                        ),
                                        Text(
                                          'IIT Bombay',
                                          style: GoogleFonts.inder(
                                            fontSize: 17.hWise,
                                          ),
                                        ),
                                      ],
                                    )),
                              ),
                            ),
                            GestureDetector(
                              onTap: () {},
                              child: Material(
                                elevation: 20,
                                borderRadius: BorderRadius.circular(30),
                                child: Container(
                                    decoration: BoxDecoration(
                                        color: Color(0xffEDEBEB),
                                        borderRadius:
                                            BorderRadius.circular(30)),
                                    height: 170.hWise,
                                    width: 170.wWise,
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceEvenly,
                                      children: [
                                        Container(
                                          decoration: BoxDecoration(
                                              color: Colors.white,
                                              borderRadius:
                                                  BorderRadius.circular(20)),
                                          height: 100.hWise,
                                          width: 100.wWise,
                                          child: Image.asset(
                                            'assets/img/coursera.png',
                                            height: 200.hWise,
                                          ),
                                        ),
                                        Text(
                                          'Coursera',
                                          style: GoogleFonts.inder(
                                            fontSize: 17.hWise,
                                          ),
                                        ),
                                      ],
                                    )),
                              ),
                            )
                          ],
                        ),
                        20.hGap,
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            GestureDetector(
                              onTap: () {},
                              child: Material(
                                elevation: 20,
                                borderRadius: BorderRadius.circular(30),
                                child: Container(
                                    decoration: BoxDecoration(
                                        color: Color(0xffEDEBEB),
                                        borderRadius:
                                            BorderRadius.circular(30)),
                                    height: 170.hWise,
                                    width: 170.wWise,
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceEvenly,
                                      children: [
                                        Container(
                                          decoration: BoxDecoration(
                                              color: Colors.white,
                                              borderRadius:
                                                  BorderRadius.circular(20)),
                                          height: 100.hWise,
                                          width: 100.wWise,
                                          child: Image.asset(
                                            'assets/img/isro.png',
                                            height: 200.hWise,
                                          ),
                                        ),
                                        Text(
                                          'ISRO-IIRS',
                                          style: GoogleFonts.inder(
                                            fontSize: 17.hWise,
                                          ),
                                        ),
                                      ],
                                    )),
                              ),
                            ),
                            GestureDetector(
                              onTap: () {},
                              child: Material(
                                elevation: 20,
                                borderRadius: BorderRadius.circular(30),
                                child: Container(
                                    decoration: BoxDecoration(
                                        color: Color(0xffEDEBEB),
                                        borderRadius:
                                            BorderRadius.circular(30)),
                                    height: 170.hWise,
                                    width: 170.wWise,
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceEvenly,
                                      children: [
                                        Container(
                                          decoration: BoxDecoration(
                                              color: Colors.white,
                                              borderRadius:
                                                  BorderRadius.circular(20)),
                                          height: 100.hWise,
                                          width: 100.wWise,
                                          child: Image.asset(
                                            'assets/img/dei.png',
                                            height: 200.hWise,
                                          ),
                                        ),
                                        Text(
                                          'DEI-SRMIST',
                                          style: GoogleFonts.inder(
                                            fontSize: 17.hWise,
                                          ),
                                        ),
                                      ],
                                    )),
                              ),
                            ),
                          ],
                        ),
                        20.hGap,
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            GestureDetector(
                              onTap: () {},
                              child: Material(
                                elevation: 20,
                                borderRadius: BorderRadius.circular(30),
                                child: Container(
                                    decoration: BoxDecoration(
                                        color: Color(0xffEDEBEB),
                                        borderRadius:
                                            BorderRadius.circular(30)),
                                    height: 170.hWise,
                                    width: 170.wWise,
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceEvenly,
                                      children: [
                                        Container(
                                          decoration: BoxDecoration(
                                              color: Colors.white,
                                              borderRadius:
                                                  BorderRadius.circular(20)),
                                          height: 100.hWise,
                                          width: 100.wWise,
                                          child: Image.asset(
                                            'assets/img/srm.png',
                                            height: 200.hWise,
                                          ),
                                        ),
                                        Text(
                                          'SRMIST',
                                          style: GoogleFonts.inder(
                                            fontSize: 17.hWise,
                                          ),
                                        ),
                                      ],
                                    )),
                              ),
                            ),
                            GestureDetector(
                              onTap: () {},
                              child: Material(
                                elevation: 20,
                                borderRadius: BorderRadius.circular(30),
                                child: Container(
                                    decoration: BoxDecoration(
                                        color: Color(0xffEDEBEB),
                                        borderRadius:
                                            BorderRadius.circular(30)),
                                    height: 170.hWise,
                                    width: 170.wWise,
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceEvenly,
                                      children: [
                                        Container(
                                          decoration: BoxDecoration(
                                              color: Colors.white,
                                              borderRadius:
                                                  BorderRadius.circular(20)),
                                          height: 100.hWise,
                                          width: 100.wWise,
                                          child: Image.asset(
                                            'assets/img/udemy.png',
                                            height: 200.hWise,
                                          ),
                                        ),
                                        Text(
                                          'Udemy',
                                          style: GoogleFonts.inder(
                                            fontSize: 17.hWise,
                                          ),
                                        ),
                                      ],
                                    )),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ));
            });
      },
    );
  }
}
