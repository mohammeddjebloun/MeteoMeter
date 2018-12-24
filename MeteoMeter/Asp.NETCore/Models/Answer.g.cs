
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class Answer : Identifier
	{
		public Answer() : base()
		{
		}

		public DateTime AnswerDate { get; set; }


		public int AnsweredById { get; set; }


		public int CardId { get; set; }


		public int ChoiceId { get; set; }

								public virtual UserProfile AnsweredBy { get; set; }

								public virtual Card Card { get; set; }

								public virtual Choice Choice { get; set; }


	}
}