
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore.Swagger;
using MeteoMeter.Backend.Models;
using MeteoMeter.Backend.Services;
using MeteoMeter.Backend.Infrastructure.Services;
using MeteoMeter.Backend.Repositories;

namespace MeteoMeter.Backend
{
    public partial class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see https://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

			services.AddCors(options =>
            {
                options.AddPolicy("SiteCorsPolicy",
                builder => builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());
            });

            //Configure authentication services.
			ConfigureAuth(services);

            services.AddMvc();

            // Add application services.
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
			services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
			
						services.AddScoped<IIdentifierRepository, IdentifierRepository>();
						services.AddScoped<ICardRepository, CardRepository>();
						services.AddScoped<IReportingRepository, ReportingRepository>();
						services.AddScoped<IIdeaRepository, IdeaRepository>();
						services.AddScoped<IResultRepository, ResultRepository>();
						services.AddScoped<IChoiceRepository, ChoiceRepository>();
						services.AddScoped<IAnswerRepository, AnswerRepository>();
						services.AddScoped<IUserProfileRepository, UserProfileRepository>();
						services.AddScoped<IGroupRepository, GroupRepository>();
						services.AddScoped<IPictureRepository, PictureRepository>();
			
						services.AddScoped<IIdentifierService, IdentifierService>();
						services.AddScoped<ICardService, CardService>();
						services.AddScoped<IReportingService, ReportingService>();
						services.AddScoped<IIdeaService, IdeaService>();
						services.AddScoped<IResultService, ResultService>();
						services.AddScoped<IChoiceService, ChoiceService>();
						services.AddScoped<IAnswerService, AnswerService>();
						services.AddScoped<IUserProfileService, UserProfileService>();
						services.AddScoped<IGroupService, GroupService>();
						services.AddScoped<IPictureService, PictureService>();
			
			 // Register the Swagger generator, defining one or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "MeteoMeter API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

			app.UseCors("SiteCorsPolicy");

            app.UseStaticFiles();

            ConfigureAuth(app);

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

			 // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "MeteoMeter API V1");
            });
        }
    }
}