
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class Groupaaaaaaaaaaaaaa 
	{
		public Groupaaaaaaaaaaaaaa() 
		{
		}

		public int IdGroup  { get; set; }
		public string Name  { get; set; }
		public int NumberMembers  { get; set; }
		public string City  { get; set; }
		public string Country  { get; set; }
		public int CreatedbyId  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public Groupaaaaaaaaaaaaaa ConvertFromModel(Group group,UserProfile userProfile)
		{
			IdGroup = group.Id;
			Name = group.Name;
			City = group.City;
			Country = group.Country;
			CreatedbyId = userProfile.Id;

			return this;
		}

		public Group GetGroupFromViewModel()
		{
			var model = new Group();
			model.Id =  IdGroup;
			model.Name =  Name;
			model.City =  City;
			model.Country =  Country;

			return model;
		}
				public UserProfile GetUserProfileFromViewModel()
		{
			var model = new UserProfile();
			model.Id =  CreatedbyId;

			return model;
		}
			
	}
}