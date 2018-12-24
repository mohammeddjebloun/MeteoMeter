
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class Reportaaaaaaaaaaaaaa 
	{
		public Reportaaaaaaaaaaaaaa() 
		{
			Results = new HashSet<Result>();
		}

		public int Id  { get; set; }
		public string Content  { get; set; }
		public string Author  { get; set; }
		public int Views  { get; set; }
		public int Answers  { get; set; }
		private HashSet<Result> _results; 
		private HashSet<Result> Results { get { return _results ??(_results = new HashSet<Result>()); } set {  _results = value; }}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public Reportaaaaaaaaaaaaaa ConvertFromModel(Reporting reporting,HashSet<Result> result)
		{
			Id = reporting.Id;
			Content = reporting.Content;
			Views = reporting.Views;
			Answers = reporting.Answers;
			_results = result;

			return this;
		}

		public Reporting GetReportingFromViewModel()
		{
			var model = new Reporting();
			model.Id =  Id;
			model.Content =  Content;
			model.Views =  Views;
			model.Answers =  Answers;

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