using System.Web;
using System.Web.Optimization;

namespace Dnguyen_SPA.App_Start
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            #region Scripts

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/ref/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/ref/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/ref/jquery.unobtrusive*",
                        "~/Scripts/ref/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/ref/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                        "~/Scripts/ref/bootstrap*"));

            bundles.Add(new ScriptBundle("~/bundles/underscore").Include(
                        "~/Scripts/ref/underscore*"));

            bundles.Add(new ScriptBundle("~/bundles/backbone").Include(
                        "~/Scripts/ref/backbone*"));

            bundles.Add(new ScriptBundle("~/bundles/clientSideMVC").Include(
                    "~/Scripts/models/*.js",
                    "~/Scripts/views/*.js",
                    "~/Scripts/routers/*.js"));

            bundles.Add(new ScriptBundle("~/bundles/site.js").Include(
                    "~/Scripts/_site.js"));

            #endregion

            #region Styles

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));

            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
                "~/Content/bootstrap*",
                "~/Content/jumbotron-narrow.css"));

            #endregion
        }
    }
}