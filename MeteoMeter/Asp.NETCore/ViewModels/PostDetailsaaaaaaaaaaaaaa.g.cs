
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class PostDetailsaaaaaaaaaaaaaa 
	{
		public PostDetailsaaaaaaaaaaaaaa() 
		{
			Results = new HashSet<Result>();
		}

		public int Id  { get; set; }
		public string Content  { get; set; }
		public string Type  { get; set; }
		public DateTime PublicationDate  { get; set; }
		public DateTime EndDate  { get; set; }
		public int Views  { get; set; }
		public int Answers  { get; set; }
		public string Picture  { get; set; }
		public string TargetGroups  { get; set; }
		public string Status  { get; set; }
		private HashSet<Result> _results; 
		private HashSet<Result> Results { get { return _results ??(_results = new HashSet<Result>()); } set {  _results = value; }}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public PostDetailsaaaaaaaaaaaaaa ConvertFromModel(Card card,Reporting reporting,Picture picture,HashSet<Result> result)
		{
			Id = card.Id;
			Content = card.Content;
			Type = card.Type;
			PublicationDate = card.PublicationDate;
			EndDate = card.EndDate;
			Views = reporting.Views;
			Answers = reporting.Answers;
			Picture = picture.Picture;
			_results = result;

			return this;
		}

		public Card GetCardFromViewModel()
		{
			var model = new Card();
			model.Id =  Id;
			model.Content =  Content;
			model.Type =  Type;
			model.PublicationDate =  PublicationDate;
			model.EndDate =  EndDate;

			return model;
		}
				public Reporting GetReportingFromViewModel()
		{
			var model = new Reporting();
			model.Views =  Views;
			model.Answers =  Answers;

			return model;
		}
				public Picture GetPictureFromViewModel()
		{
			var model = new Picture();
			model.Picture =  Picture;

			return model;
		}
				public HashSet<Result> GetResultFromViewModel()
		{
			return this._results;
		}
			
		public HashSet<Result> ConvertToModel()
		{
			return this.Results;
		}
	}
}