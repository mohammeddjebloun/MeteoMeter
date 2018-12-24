
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class Result : Identifier
	{
		public Result() : base()
		{
		}

		public double Value { get; set; }


		public int ChoiceId { get; set; }


		public int ReportingId { get; set; }

								public virtual Choice Choice { get; set; }

								public virtual Reporting Reporting { get; set; }


	}
}