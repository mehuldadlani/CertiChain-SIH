import 'package:certi_chain/file_exporter.dart';

part 'auth_view_model.dart';
part 'auth_view_components.dart';

class AuthView extends StatelessWidget {
  const AuthView({super.key});

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<AuthViewModel>.nonReactive(
      viewModelBuilder: () => AuthViewModel(),
      onViewModelReady: (model) => model.init(),
      builder: (context, model, child) {
        return Scaffold(
          body: SingleChildScrollView(
            child: Column(children: [
              230.hGap,
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
                    height: 250.hWise,
                    width: 300.wWise,
                    child: Column(
                      children: [
                        60.hGap,
                        Text(
                          'Sign Up',
                          style: GoogleFonts.inder(
                            fontSize: 25.hWise,
                          ),
                        ),
                        60.hGap,
                        Material(
                          borderRadius: BorderRadius.circular(20),
                          elevation: 10,
                          child: Container(
                            decoration: BoxDecoration(
                                gradient: const LinearGradient(
                                  colors: [
                                    Color(0xFFF250DA),
                                    Color(0xFF874DEA),
                                    Color(0xFFA84EE6),
                                  ],
                                  begin: Alignment.topLeft,
                                  end: Alignment.bottomRight,
                                ),
                                borderRadius: BorderRadius.circular(20)),
                            width: 200.wWise,
                            child: ElevatedButton(
                                style: ElevatedButton.styleFrom(
                                    primary: Colors.transparent,
                                    shadowColor: Colors.transparent),
                                onPressed: model.handleLogin,
                                child: Row(
                                  children: [
                                    Image.asset(
                                      'assets/img/particle.png',
                                      height: 40.hWise,
                                    ),
                                    10.wGap,
                                    Text('Connect Wallet',
                                        style: GoogleFonts.inder(
                                          fontSize: 17.hWise,
                                          color: Colors.white,
                                        )),
                                  ],
                                )),
                          ),
                        )
                      ],
                    )),
              ),
            ]),
          ),
        );
      },
    );
  }
}
