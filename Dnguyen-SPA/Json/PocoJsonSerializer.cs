using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace Dnguyen_SPA.Json
{
    public static class PocoJsonSerializer
    {
        public static T BuildPocoFromJson<T>(string json)
        {
            JavaScriptSerializer jss = new JavaScriptSerializer();
            var poco = jss.Deserialize<T>(json);
            return poco;
        }

        public static List<T> BuildListOfPocosFromJson<T>(string json)
        {
            JavaScriptSerializer jss = new JavaScriptSerializer();
            var poco = jss.Deserialize<List<T>>(json);
            return poco;
        }

        public static V BuildViewModelFromJson<P, V>(string json)
        {
            JavaScriptSerializer jss = new JavaScriptSerializer();
            var poco = jss.Deserialize<P>(json);
            var model = Mapper.Map<P, V>(poco);
            return model;
        }

    }
}