part of 'issue_view.dart';

class IssueViewModel extends BaseViewModel {
  final NavigationService _navigationService = locator<NavigationService>();
  void onTapHandler({required String orgName}) {
    _navigationService.navigateTo(Routes.issueFormView,
        arguments: IssueFormViewArguments(orgName: orgName));
  }
}
