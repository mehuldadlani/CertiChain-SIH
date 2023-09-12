part of 'user_details_view.dart';

class UserDetailViewModel extends BaseViewModel {
  final _navigationService = locator<NavigationService>();
  TextEditingController nameController = TextEditingController();
  TextEditingController dobController = TextEditingController();
  TextEditingController aadharController = TextEditingController();
  TextEditingController emailController = TextEditingController();

  Future<void> handleSubmitButton(BuildContext context) async {
    print('Submit button pressed');
    Map<String, String> requestBody = {
      "name": nameController.text,
      "dob": dobController.text,
      "aadhar": aadharController.text,
      "email": emailController.text,
      "walletAddress": AuthLogic.evmPubAddress ?? '',
    };

    var url = Uri.parse('http://192.168.157.161:8080/createUser');
    var response = await http.post(
      url,
      body: jsonEncode(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    );

    if (response.statusCode == 200) {
      log(response.body);
      log('Login and POST request successful');
      _navigationService.navigateTo(Routes.homeView);
    } else {
      print('Error in POST request: ${response.statusCode}');
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: const Text("POST Request Failed"),
          content: const Text("Please try again."),
          actions: [
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text("OK"),
            ),
          ],
        ),
      );
    }
  }
}
