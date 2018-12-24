
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace MeteoMeter.Backend.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
		// Extended Properties
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public long? FacebookId { get; set; }
		public string PictureUrl { get; set; }
    }
}
