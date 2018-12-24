
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class Discardaaaaaaaaaaaaaa 
	{
		public Discardaaaaaaaaaaaaaa() 
		{
		}

		public int UserProfileId  { get; set; }
		public int CardId  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public Discardaaaaaaaaaaaaaa ConvertFromModel(UserProfile userProfile,Card card)
		{
			UserProfileId = userProfile.Id;
			CardId = card.Id;

			return this;
		}

		public UserProfile GetUserProfileFromViewModel()
		{
			var model = new UserProfile();
			model.Id =  UserProfileId;

			return model;
		}
				public Card GetCardFromViewModel()
		{
			var model = new Card();
			model.Id =  CardId;

			return model;
		}
			
	}
}