
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class Useraaaaaaaaaaaaaa 
	{
		public Useraaaaaaaaaaaaaa() 
		{
		}

		public string Firstname  { get; set; }
		public string Lastname  { get; set; }
		public string Picture  { get; set; }
		public string Email  { get; set; }
		public string Job  { get; set; }
		public int UserProfileId  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public Useraaaaaaaaaaaaaa ConvertFromModel(Picture picture,UserProfile userProfile)
		{
			Picture = picture.Picture;
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
			model.Job =  Job;
			model.Id =  UserProfileId;

			return model;
		}
			
	}
}