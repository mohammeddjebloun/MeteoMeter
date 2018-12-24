
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class FullUseraaaaaaaaaaaaaa 
	{
		public FullUseraaaaaaaaaaaaaa() 
		{
		}

		public string Firstname  { get; set; }
		public string Lastname  { get; set; }
		public string Picture  { get; set; }
		public string PhoneNumber  { get; set; }
		public string Email  { get; set; }
		public string Country  { get; set; }
		public string City  { get; set; }
		public string Job  { get; set; }
		public int UserProfileId  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public FullUseraaaaaaaaaaaaaa ConvertFromModel(Picture picture,UserProfile userProfile)
		{
			Picture = picture.Picture;
			Country = userProfile.Country;
			City = userProfile.City;
			Job = userProfile.Job;
			UserProfileId = userProfile.Id;

			return this;
		}

		public Picture GetPictureFromViewModel()
		{
			var model = new Picture();
			model.Picture =  Picture;

			return model;
		}
				public UserProfile GetUserProfileFromViewModel()
		{
			var model = new UserProfile();
			model.Country =  Country;
			model.City =  City;
			model.Job =  Job;
			model.Id =  UserProfileId;

			return model;
		}
			
	}
}