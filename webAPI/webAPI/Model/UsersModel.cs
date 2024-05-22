namespace webAPI.Model
{
    public class UsersModel
    {
        private int idUser = 0;
        private string name = string.Empty;
        private int age = 0;
        private string username = string.Empty;
        private string email = string.Empty;
        private string password = string.Empty;

        public int IdUser { get => idUser; set => idUser = value; }
        public string Name { get => name; set => name = value; }
        public int Age { get => age; set => age = value; }
        public string Username { get => username; set => username = value; }
        public string Email { get => email; set => email = value; }
        public string Password { get => password; set => password = value; }
    }
}
