
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class Group : Identifier
	{
		public Group() : base()
		{
		}

		public string Name { get; set; }


		public string Department { get; set; }


		public string City { get; set; }


		public DateTime CreationDate { get; set; }


		public string Country { get; set; }


		public int CreatedById { get; set; }

								public virtual UserProfile CreatedBy { get; set; }


	}
}