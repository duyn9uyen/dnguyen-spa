using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class ArticlesService
    {
        public string GetAllCategories()
        {
            return this.Get(EndPoints.GetAllCategories);
        }

        public string GetAllBanners()
        {
            return this.Get(EndPoints.GetAllBanners);
        }

        public string GetAllArticles()
        {
            return this.Get(EndPoints.GetAllArticles);
        }

        public string GetFeaturedArticles()
        {
            return this.Get(EndPoints.GetFeaturedArticles);
        }

        public string GetArticleById(int id)
        {
            return this.Get(string.Format(EndPoints.GetArticleById, id));
        }

        public string GetArticlesByCategoryId(int id)
        {
            return this.Get(string.Format(EndPoints.GetArticlesByCategoryId, id));
        }

        /// <summary>
        /// Get Method that uses a WebClient to call into the service
        /// </summary>
        /// <param name="endpoint"></param>
        /// <returns></returns>
        protected string Get(string endpoint)
        {
            string jsonResponse = string.Empty;

            using (var client = new WebClient())
            {
                try
                {
                    client.UseDefaultCredentials = true;
                    jsonResponse = client.DownloadString(endpoint);
                }
                catch (WebException ex)
                {
                    throw;
                }

                return jsonResponse;
            }
        }
    }
}
