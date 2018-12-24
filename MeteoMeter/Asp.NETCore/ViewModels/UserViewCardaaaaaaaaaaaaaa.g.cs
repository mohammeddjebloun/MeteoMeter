
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class UserViewCardaaaaaaaaaaaaaa 
	{
		public UserViewCardaaaaaaaaaaaaaa() 
		{
		}

		public int CardId  { get; set; }
		public int UserId  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public UserViewCardaaaaaaaaaaaaaa ConvertFromModel(Card card,UserProfile userProfile)
		{
			CardId = card.Id;
			UserId = userProfile.Id;

			return this;
		}

		public Card GetCardFromViewModel()
		{
			var model = new Card();
			model.Id =  CardId;

			return model;
		}
				public UserProfile GetUserProfileFromViewModel()
		{
			var model = new UserProfile();
			model.Id =  UserId;

			return model;
		}
			
	}
}