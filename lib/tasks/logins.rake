namespace :logins do
  desc "seed users"
  task seed_users: :environment do
    User.destroy_all

    # admin username
    email = "demo@heidless-app-0.com"
    password = "password"
    user = User.create!(
                  email: email,
                  password: password,
                  password_confirmation: password
                )
    profile = user.profile
    profile.update address_1: "99 Bd Haussmann, 75008 Paris, France", city: "Paris", state: "Île-de-France", country: "France", zip_code: "75008", latitude: "48.87442612865394", longitude: "2.3221185212140307"
  end
end
