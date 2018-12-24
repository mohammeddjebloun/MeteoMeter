
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class Answeraaaaaaaaaaaaaa 
	{
		public Answeraaaaaaaaaaaaaa() 
		{
		}

		public int IdUser  { get; set; }
		public int IdCard  { get; set; }
		public int IdChoice  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public Answeraaaaaaaaaaaaaa ConvertFromModel(UserProfile userProfile,Card card,Choice choice)
		{
			IdUser = userProfile.Id;
			IdCard = card.Id;
			IdChoice = choice.Id;

			return this;
		}

		public UserProfile GetUserProfileFromViewModel()
		{
			var model = new UserProfile();
			model.Id =  IdUser;

			return model;
		}
				public Card GetCardFromViewModel()
		{
			var model = new Card();
			model.Id =  IdCard;

			return model;
		}
				public Choice GetChoiceFromViewModel()
		{
			var model = new Choice();
			model.Id =  IdChoice;

			return model;
		}
			
	}
}