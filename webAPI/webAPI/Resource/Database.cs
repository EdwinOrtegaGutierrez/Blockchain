using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System.Data;

namespace webAPI.Resource
{
    public class Database
    {
        string Connectivity { get; } = "server=127.0.0.1;uid=root;pwd=;database=tree_soul";


        // Function to execute queries, takes them as inputs, and returns a list of objects from the resulting query: [{...}]
        public string GetInformation(string query)
        {
            using MySqlConnection connection = new(Connectivity);
            try
            {
                connection.Open();
                using MySqlDataReader reader = new MySqlCommand(query, connection).ExecuteReader();
                DataTable dataTable = new();
                dataTable.Load(reader);
                return JsonConvert.SerializeObject(dataTable);
            } catch (MySqlException ex) {
                return $"ERROR: {ex.Message}";
            } finally {
                connection.Close();
            }
        }

        public string SetInformation(string query)
        {
            using MySqlConnection connection = new(Connectivity);
            try
            {
                connection.Open();
                using MySqlCommand cmd = new(query, connection);
                cmd.ExecuteNonQuery(); 
                return "The data has been successfully saved";
            } catch (Exception ex) {
                return $"Error MySQL: {ex.Message}";
            } finally {
                connection.Close();
            }
        }

    }
}
