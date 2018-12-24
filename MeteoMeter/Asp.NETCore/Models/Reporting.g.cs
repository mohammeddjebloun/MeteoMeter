
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class Reporting : Card
	{
		public Reporting() : base()
		{
		}

		public int Views { get; set; }


		public int Answers { get; set; }


		public int CardId { get; set; }

		private HashSet<Result> _Results; 
						public HashSet<Result> Results { get { return _Results ??(_Results = new HashSet<Result>()); }}


	}
}