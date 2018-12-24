
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class EditableIdeaaaaaaaaaaaaaaa 
	{
		public EditableIdeaaaaaaaaaaaaaaa() 
		{
		}

		public int Id  { get; set; }
		public string Content  { get; set; }
		public DateTime PublicationDate  { get; set; }
		public DateTime EndDate  { get; set; }
		public int TargetGroupsIds  { get; set; }
		public string Picture  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public EditableIdeaaaaaaaaaaaaaaa ConvertFromModel(Idea idea,Group group,Picture picture)
		{
			Id = idea.Id;
			Content = idea.Content;
			PublicationDate = idea.PublicationDate;
			EndDate = idea.EndDate;
			TargetGroupsIds = group.Id;
			Picture = picture.Picture;

			return this;
		}

		public Idea GetIdeaFromViewModel()
		{
			var model = new Idea();
			model.Id =  Id;
			model.Content =  Content;
			model.PublicationDate =  PublicationDate;
			model.EndDate =  EndDate;

			return model;
		}
				public Group GetGroupFromViewModel()
		{
			var model = new Group();
			model.Id =  TargetGroupsIds;

			return model;
		}
				public Picture GetPictureFromViewModel()
		{
			var model = new Picture();
			model.Picture =  Picture;

			return model;
		}
			
	}
}