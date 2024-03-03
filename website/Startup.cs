using System.IO;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MongoDB.Driver;
using website.Services;

namespace website
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }


        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSingleton<EmployerServices>();
            services.AddSingleton<NewsServices>();
            services.AddSingleton<MailService>();
            services.AddSingleton<AdvertisementServices>();
            services.AddSingleton<StudentServices>();
            services.AddSingleton<SliderServices>();
            services.AddSingleton<SpecialityServices>();
            services.AddSingleton<CollegeActivityServices>();
            services.AddSingleton<EntrantServices>();
            services.AddSingleton<HistoryServices>();
            services.AddSingleton<EmployersPageServices>();
            services.AddSingleton<EntrantPageServices>();
            services.AddSingleton<OppServices>();
            services.AddSingleton<GalleryServices>();


            services.AddSingleton<IMongoClient, MongoClient>(s =>
            {
                var uri = s.GetRequiredService<IConfiguration>()["MongoUri"];
                return new MongoClient(uri);
            });

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                        builder =>
                        {
                            builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                        }
                    );
            }


                );
        }


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            var certificatePath = Path.Combine(env.ContentRootPath, "certificate", "certificate.crt");
            var privateKeyPath = Path.Combine(env.ContentRootPath, "certificate", "private.key");

            var certificate = new X509Certificate2(certificatePath, privateKeyPath);

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors();
            app.UseHsts();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            // app.UseSpa(spa =>
            // {
            //     spa.Options.SourcePath = "ClientApp";
            //
            //     if (env.IsDevelopment())
            //     {
            //         spa.UseReactDevelopmentServer(npmScript: "start");
            //     }
            // });


        }
    }
}
