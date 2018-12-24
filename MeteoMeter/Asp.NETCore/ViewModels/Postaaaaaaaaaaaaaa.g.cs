
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class Postaaaaaaaaaaaaaa 
	{
		public Postaaaaaaaaaaaaaa() 
		{
		}

		public int Id  { get; set; }
		public string Content  { get; set; }
		public DateTime PublicationDate  { get; set; }
		public DateTime EndDate  { get; set; }
		public string Status  { get; set; }
		public string Type  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public Postaaaaaaaaaaaaaa ConvertFromModel(Card card)
		{
			Id = card.Id;
			Content = card.Content;
			PublicationDate = card.PublicationDate;
			EndDate = card.EndDate;

			return this;
		}

		public Card GetCardFromViewModel()
		{
			var model = new Card();
			model.Id =  Id;
			model.Content =  Content;
			model.PublicationDate =  PublicationDate;
			model.EndDate =  EndDate;

			return model;
		}
			
	}
}