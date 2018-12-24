
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Models
{
	public partial class ApplicationDbContext : IdentityDbContext<ApplicationUser>
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			builder.Entity<IdentityUserLogin<string>>().HasKey(e => new { e.UserId });
            builder.Entity<IdentityUserRole<string>>().HasKey(e => new { e.RoleId });
            builder.Entity<IdentityUserToken<string>>().HasKey(e => new { e.UserId });
										builder.Entity<Identifier>().HasKey(e => new {  e.Id   });
						builder.Entity<Card>().HasKey(e => new {  e.Id   });
						builder.Entity<Reporting>().HasKey(e => new {  e.Id   });
						builder.Entity<Idea>().HasKey(e => new {  e.Id   });
						builder.Entity<Result>().HasKey(e => new {  e.Id   });
						builder.Entity<Choice>().HasKey(e => new {  e.Id   });
						builder.Entity<Answer>().HasKey(e => new {  e.Id   });
						builder.Entity<UserProfile>().HasKey(e => new {  e.Id   });
						builder.Entity<Group>().HasKey(e => new {  e.Id   });
						builder.Entity<Picture>().HasKey(e => new {  e.Id   });
					}


		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

				public DbSet<Identifier> Identifiers { get; set; }
				public DbSet<Card> Cards { get; set; }
				public DbSet<Reporting> Reportings { get; set; }
				public DbSet<Idea> Ideas { get; set; }
				public DbSet<Result> Results { get; set; }
				public DbSet<Choice> Choices { get; set; }
				public DbSet<Answer> Answers { get; set; }
				public DbSet<UserProfile> UserProfiles { get; set; }
				public DbSet<Group> Groups { get; set; }
				public DbSet<Picture> Pictures { get; set; }
				
	}
}