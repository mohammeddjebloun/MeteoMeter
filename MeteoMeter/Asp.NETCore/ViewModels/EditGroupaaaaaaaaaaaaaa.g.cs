
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class EditGroupaaaaaaaaaaaaaa 
	{
		public EditGroupaaaaaaaaaaaaaa() 
		{
		}

		public string Name  { get; set; }
		public string City  { get; set; }
		public string Country  { get; set; }
		public int CreatedbyId  { get; set; }
		public int Id  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public EditGroupaaaaaaaaaaaaaa ConvertFromModel(Group group,UserProfile userProfile)
		{
			Name = group.Name;
			City = group.City;
			Country = group.Country;
			CreatedbyId = userProfile.Id;
			Id = group.Id;

			return this;
		}

		public Group GetGroupFromViewModel()
		{
			var model = new Group();
			model.Name =  Name;
			model.City =  City;
			model.Country =  Country;
			model.Id =  Id;

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