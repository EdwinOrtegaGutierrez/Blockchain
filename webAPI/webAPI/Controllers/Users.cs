using Microsoft.AspNetCore.Mvc;
using webAPI.Model;
using webAPI.Resource;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Users : ControllerBase
    {
        [HttpPost]
        [Route("create_account")]
        public dynamic Post([FromBody] UsersModel usersModel) 
        {
            try
            {
                Database db = new();
                string username = usersModel.Username;
                username = string.IsNullOrEmpty(username) ? "NULL" : $"'{username}'";

                string email = usersModel.Email;
                email = string.IsNullOrEmpty(email) ? "NULL" : $"'{email}'";

                return new
                {
                    Success = true,
                    Message = db.SetInformation($"CALL createUser('{usersModel.Name}', {usersModel.Age}, {username}, {email}, '{usersModel.Password}');")
                };
            }
            catch (Exception ex)
            {
                return new { Success = false, Message = $"Error: {ex.Message}" };
            }
        }

        [HttpGet]
        [Route("login")]
        public dynamic Get([FromQuery] string categoria)
        {
            try
            {
                return new
                {
                    Success = true
                };
            }
            catch (Exception ex)
            {
                return new { Success = false, Message = $"Error: {ex.Message}" };
            }
        }
    }
}
