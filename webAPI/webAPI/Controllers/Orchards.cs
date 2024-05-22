using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webAPI.Model;
using webAPI.Resource;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Orchards : ControllerBase
    {
        [HttpPost]
        [Route("create_orchard")]
        public dynamic Post([FromBody] OrchardModel orchard)
        {
            {
                try
                {
                    Database db = new();

                    return new
                    {
                        Success = true,
                        Message = db.SetInformation(@$"CALL createOrchard(  {orchard.OrchardLength}, 
                                                                        {orchard.OrchardWidht},
                                                                        {orchard.SquereLength},
                                                                        {orchard.SquereWidth},
                                                                        {orchard.SqueresLength},
                                                                        {orchard.SqueresWidth},
                                                                        {orchard.IdUser});")
                    };
                }
                catch (Exception ex)
                {
                    return new { Success = false, Message = $"Error: {ex.Message}" };
                }
            }
        }
    }
}
